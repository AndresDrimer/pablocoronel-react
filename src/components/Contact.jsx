export default function Contact(){
    function handleSubmit(e){
        e.preventDefault();   
    }

    function handleChange(){}
    return (
        <>
        <h1>CONTACT</h1>
        <form
        method="post"
        onSubmit={handleSubmit}
        >
        <input 
        type="text"
        name=""
        value=""
        placeholder="Name" 
        onChange={handleChange}
        required />
        <input 
        type="email"
        name=""
        value=""
        placeholder="Email" 
        onChange={handleChange}
        required />
        <input 
        type="text"
        name=""
        value=""
        placeholder="Subject" 
        onChange={handleChange}
         />
         <input 
        type="textarea"
        name=""
        value=""
        placeholder="Message" 
        onChange={handleChange}
        required />
        <button>Send</button>
        
        </form></>
    )
}