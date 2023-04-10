export default function Form() {
    return ( <
        div className = "w-50 card m-auto p-3 mt-5" >
        <
        form >
        <
        div className = "mb-3 mt-3" >
        <
        label className = "form-label" > Name: < /label> <
        input type = "text"
        name = "email"
        className = "form-control"
        placeholder = "Enter name" / >
        <
        /div> <
        div className = "mb-3 mt-3" >
        <
        label className = "form-label" > Email address: < /label> <
        input type = "text"
        name = "email"
        className = "form-control"
        placeholder = "Enter email" / >
        <
        /div> <
        div className = "mb-3" >
        <
        label className = "form-label" > Password: < /label> <
        input type = "text"
        name = "password"
        className = "form-control"
        placeholder = "Password" / >
        <
        /div>

        <
        div >
        <
        div class = "form-check" >
        <
        input type = "radio"
        class = "form-check-input"
        id = "radio1"
        name = "optradio"
        value = "option1"
        checked /
        >
        Nam < label class = "form-check-label"
        for = "radio1" > < /label> <
        /div>

        <
        div class = "form-check" >
        <
        input type = "radio"
        class = "form-check-input"
        id = "radio1"
        name = "optradio"
        value = "option1"
        checked /
        >
        Nữ < label class = "form-check-label"
        for = "radio1" > < /label> <
        /div> <
        br >
        <
        /br> <
        div className = "form-check mb-3" >
        <
        label className = "form-check-label" > Remember me < /label> <
        input className = "form-check-input"
        type = "checkbox" / >
        <
        /div>

        { /* submit */ } <
        input type = "submit"
        className = "btn btn-success w-10"
        value = "Submit" /
        >
        <
        /div>

        <
        div class = "form-check form-switch" >
        <
        input class = "form-check-input"
        type = "checkbox"
        id = "mySwitch"
        name = "darkmode"
        value = "yes"
        checked /
        >
        <
        label class = "form-check-label"
        for = "mySwitch" >
        Dark Mode <
        /label> <
        /div> <
        /form> <
        /div>
    );
}