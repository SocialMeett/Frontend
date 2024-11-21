import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { apiUpdateProfile } from "../../services/auth";

const UpdateProfile = () => {
    const {id} = useParams();
    const [location, setlocation] = useState("");
    const [error, setError] = useState("");

}