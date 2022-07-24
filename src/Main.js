function Main(){
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus/>
                <textarea id="body" placeholder="Write your note here......"/>
            </div>
            <div className="app-main-note-preview ">
                <div className="preview-title">TITLE</div>
                <div className="markdown-preview"> note preview</div>
            </div>
        </div>
    )
}

export default Main;