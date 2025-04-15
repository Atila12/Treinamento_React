import './MyForm.css'
import {useState} from 'react'

const MyForm = ({user}) => {
    // 6 -Controlled inputs 
    // 3 -gerenciamento de dados 
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const[bio, setBio] = useState(user ? user.bio : "");

    const [role, setRole] = useState(user ? user.role : "");

    const handleName = (e) => {
        console.log(e.target.valeu);
    };

    //console.log(name);
    //console.log(email);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o  Formulario")
        console.log(name, email, bio, role)

        // 7 - limpar formulario 
        setName("");
        setEmail("");
        setBio("");
    };

  return (

    <div>
      {/*5 - envio de form */} 

      {/* 1 - criação de form */}
      <form onSubmit={handleSubmit}>
            <div>
                <label htmfor="name">Nome</label>
                <input type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                value={name}
                />
            </div>

            {/*2 -label envolvendo input*/}
            <label>
                <span> E-mail: </span>
                {/*4 -simplificação da manipulação de state*/}
                <input type="email" 
                name="email" 
                placeholder="Digite o seu e-mail" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            {/*8 - textarea*/}
            <label>
                <span>Descrição:</span>
                <textarea name="bio" 
                placeholder="Descrição do usuário" 
                onChange={(e) => 
                setBio(e.target.value)} 
                value={bio}>
                </textarea>
            </label>
            {/*9 - select*/}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" valeu="Enviar" />
      </form>
    </div>
  );
};

export default MyForm






