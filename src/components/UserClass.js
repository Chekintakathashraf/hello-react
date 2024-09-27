import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        // this.state = {
        //     count : 0,
        //     age : 23,
        // };

        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Dummy",
            },
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Chekintakathashraf");
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo : json,
        });
    }

    render() {
        const {avatar_url,name,location,login} = this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h3>{name}</h3>
                <h3>{location}</h3>
                <h3>{login}</h3>
            </div>
        )
    };
};

export default UserClass;