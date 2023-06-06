import { useAuth } from "../context/userAuth";
const Home = () => {
    const [auth,setAuth] = useAuth()
    return (
        <div>
            <h1>home page</h1>
            <p>{JSON.stringify(auth,null,4)}</p>
        
        </div> 
        


     );
}
 
export default Home;