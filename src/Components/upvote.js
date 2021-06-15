import Styles from '../Styles/Upvote.module.css';
const upvote = (id)=>{
    const handleClick = async ()=>{
        const option = {
            method: 'POST',
            headers: {
                'CONTENT-TYPE' : 'application/json'
            },
            body: JSON.stringify({"upvote": 1})
        };
        console.log(id.id);
        await fetch(`/post/upvote/${id.id}`,option);
    }
    return(
    <span class={Styles.vote}>
          <svg width="36" height="36" onClick={handleClick}>
            <path d="M2 10h32L18 26 2 10z" fill="currentColor"></path>
        </svg>
        </span>
        
    )
}
export default upvote;