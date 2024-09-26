'use client'
import { useState } from "react";
import { useToast } from "./use-toast";

export default function usePreviewImg() {
    const [imgUrl, setImgUrl] = useState(null);
    const { toast } = useToast();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setImgUrl(reader.result); 
            };
            console.log('hook');

            reader.readAsDataURL(file);
            
        } else {
            console.log("error reading file img");

            //toast("Invalid file type", "Please select an image file", "warning");
        }
    };

    return { handleImageChange, imgUrl, setImgUrl };
}
