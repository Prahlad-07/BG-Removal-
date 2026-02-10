import {createContext, useState} from "react";
import {useAuth, useClerk, useUser} from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ( props ) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [credits, setCredits] = useState(0);
    const {getToken} = useAuth();
    const [image, setImage] = useState(null);
    const [resultImage, setResultImage] = useState(null);
    const {isSignedIn} = useUser();
    const {openSignIn} = useClerk();
    const navigate = useNavigate();

    const loadUserCredits = async () => {
        try {
            const token = await getToken();
            const response = await axios.get(backendUrl+"/users/credits", {headers: {Authorization: `Bearer ${token}`}});
            if (response.data.success) {
                setCredits(response.data.data.credits);
            } else {
                toast.error("Error loading credits.");
            }
        }catch (error) {
            console.error("Failed to load credits:", error);
            toast.error("Error loading credits.");
        }
    }

    const removeBg = async (selectedImage) => {
        try {
            if (!isSignedIn) {
                openSignIn();
                return;
            }

            if (!selectedImage) {
                toast.error("Please select an image first.");
                return;
            }

            setImage(selectedImage);
            setResultImage(null);
            //navigate to the result image
            navigate("/result");

            const token = await getToken();
            const formData = new FormData();
            formData.append("file", selectedImage);

            const {data} = await axios.post(backendUrl+"/images/remove-background", formData, {headers: {Authorization: `Bearer ${token}`}});
            
            if (data.success) {
                setResultImage(`data:image/png;base64,${data.data.image}`);
                setCredits(data.data.creditsRemaining);
            } else {
                toast.error(data.data?.message || "Error while removing background.");
            }
        }catch (error) {
            console.error("Error removing background:", error);
            toast.error(error.response?.data?.data || "Error while removing background image.");
        }
    }

    const contextValue = {
        credits, setCredits,
        image, setImage,
        resultImage, setResultImage,
        backendUrl,
        loadUserCredits,
        removeBg
    }

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;