import Styles from "./Content.module.css"
import ListStamps from "../ListStamps/ListStamps"
import { useState } from "react";

export default function Content(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [stamps, setStamps] = useState([])

    function addStamp(){
        const stamp = {
            id: Date.now(),
            value: name,
            description: description,
            status: false,
            delStamps: delStamp,
        }   

        let newStamp = [stamp, ...stamps];
        setStamps(newStamp);
        setName("")
        setDescription("")
    }

    function delStamp(id){
        setStamps(stamps.filter(e => e.id !== id))
    }

    return(
        <main className={Styles.main}>
            <div className={Styles.content}>
                <div className={Styles.survey}>
                    <form className={Styles.form} id="form-stamps">
                        <div className={Styles.field}>
                            <label htmlFor="input-stamps">Наименование</label>
                            <input 
                            value={name} 
                            type="text" 
                            className={Styles.name} 
                            id="name-stamps" 
                            name="input-stamps"
                            onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        
                        <div className={Styles.field}>
                            <label htmlFor="textarea-stamps">Заметочка</label>
                            <textarea 
                            className={Styles.text} 
                            id="text-stamps" 
                            name="textarea-stamps" 
                            maxLength={400}
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>

                        <button type="button" onClick={() => addStamp()}>Сохранить</button>
                        <button type="reset">Очистить</button>
                    </form>
                </div>

                <div className={Styles.list}>
                    <ListStamps stamps={stamps}/>
                </div>
            </div>
        </main>
    )
}