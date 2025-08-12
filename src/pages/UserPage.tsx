import {useEffect} from "react";
import {useParams} from "react-router";

const UserPage = () =>{
    const { userId } = useParams();

// const { searchParams } = useSearchParams();
// const id = useParams.get("id");
// const id = useParams.get("name");

    useEffect(()=>{
        document.title = `CF7 User id: ${ userId}`;
    }, [userId]);

    return(
        <>
            <h1>user with id: {userId}</h1>
        </>
    )
}

export default UserPage;