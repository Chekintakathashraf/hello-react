import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <User/>
            <UserClass name={"Asr"} location = {"Kannur"}/>
        </div>
    )
};

export default About;