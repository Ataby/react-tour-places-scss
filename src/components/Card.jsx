import CardStyle from "../scss/card.module.scss"

const Card = function ({data}) {
console.log(data)

  return <div className={CardStyle.container} >
    {data.map((item)=>{
      const {id,name,job,comment,img}=item;

      return (
        <div key={id} className={CardStyle.card} >
          <h1>{name}</h1>
          <h2>{job}</h2>
          <p>{comment}</p>
            <img src={img} alt="profile "></img>
          <div className={CardStyle.buttons} >
            <button>Small</button>
            <button>Large</button>
          </div>
        </div>
      )
    })}

  </div>
};

export default Card;

