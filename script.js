const nameIp = document.getElementById("name");
const emailIp = document.getElementById("email");
const msgIp = document.getElementById("msg");

// // sndBtn.addEventListener("click" , async()=>{
// //     console.log("hello");
// //     const name = nameIp.value;
// //     console.log(name);
// //     const mail = emailIp.value;
// //     console.log(mail);
// //     const msg = msgIp.value;
// //     console.log(msg);
// //     const res = await fetch(`http://localhost:3000/msg/sent?name=${name}&mail=${mail}&msg=${msg}`);
// //     const data = res.json();
// //     console.log(data);
// // })
async function sentMsg() {
    const fname = String(nameIp.value);
    console.log(fname);
    const fmail = String(emailIp.value);
    console.log(fmail);
    const fmsg = String(msgIp.value);
    console.log(fmsg);
    try{
        let res = await fetch(`https://backend-portfolio-9dx1.onrender.com/msg?name=${fname}&mail=${fmail}&msg=${fmsg}`);
        let data = await res.json();
        console.log(data);
        alert("msg sent");
    }
    catch(e) {
        alert(e);
    }

}
// sndBtn.addEventListener("click", async () => {
//     const name = nameIp.value;
//     const mail = emailIp.value;
//     const msg = msgIp.value;

//     try {
//         const res = await fetch("http://localhost:3000/msg/sent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ name, mail, msg })
//         });

//         const data = await res.json();
//         console.log(data);

//         alert("Message sent successfully!");
//     } catch (err) {
//         console.error("Error sending message:", err);
//         alert("Something went wrong.");
//     }
// });