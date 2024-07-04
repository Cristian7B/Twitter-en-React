import { useState } from "react"
export function TwitterFollowCard({initialIsFollowing, userName, children}) {
    console.log(initialIsFollowing)
    const [isFollowing, setBtn] = useState(initialIsFollowing)
    console.log(isFollowing)
    let srcImg = `https://unavatar.io/${userName}`
    let text = isFollowing ? "Siguiendo" : "Seguir"

    let classButton = isFollowing ? "btnToggleFollow isFollowing": "btnToggleFollow"
    function handleClick() {
        setBtn(!isFollowing)
    }
    return (
        <article className="cardFollow">

            <header className="headerCard">
                <img className="avatarUser" 
                    src={srcImg} 
                    alt="profilte"
                />
                <div className="infoCard">
                    <strong>
                        {children}
                    </strong>
                    <p className="infoUserName">
                        @{userName}
                    </p>
                </div>
            </header>

            <aside>
                <button className={classButton} onClick={handleClick}>
                    <span className="btnText">{text}</span>
                    <span className="btnToggleFollow-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}