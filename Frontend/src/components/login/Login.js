import { useState,useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { MyContext } from "../../context";
import axios from "../../Axios"


export function Login () {
	const[email,setEmail] =useState("");
    const [password,setPassword]=useState("");
	const [error, setError] = useState("");
	const navigate=useNavigate();
	const{ setUser} = useContext(MyContext);

	function handleSubmit(e) {
		e.preventDefault();
		if(!email || !password){
		  return alert("Please fill out fields");
		}
			axios.post("/login",{email,password})
			.then(({data})=>{
			  localStorage.setItem("token", data.token);
			  setUser(data);
			  navigate("/")
			})
			.catch((error)=> {
				if (
					error.response &&
					error.response.status >= 400 &&
					error.response.status <= 500
				) {
					setError("invalid credentials");
				}
			}
		)
		
	};

	return (
		<div className={styles.login_container}>
			<div><h1  className={styles.h}>DRESS CLOSET APP</h1>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h2>Login to Your Account</h2>
							<input
								type="email"
								name="email"
								placeholder="Enter email"  
								onChange={(e) =>setEmail(e.target.value)}
								value={email}
								required
								className={styles.input}
								autoComplete="on"
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={(e)=>setPassword(e.target.value)}
								value={password}
								required
								className={styles.input}
								autoComplete="on"
							/>
							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
								Sign In
							</button>
						</form>
					</div>
					<div className={styles.right}>
						<h2 style={{color:"rgb(88, 0, 59)"}}>New Here ?</h2>
						<Link to="/signup">
							<button type="button" className={styles.white_btn}>
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</div>	
		</div>
	);
};

