import css from "../styles/RatingSection.module.css";
const RatingSection = () => {
  const data = [
    {
      rating: "⭐⭐⭐⭐⭐",
      username: "Oliver Twist",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "2022-01-01",
    },
    {
      rating: "⭐⭐⭐⭐",
      username: "Mia Wallace",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos et accusamus sit eveniet in saepe asperiores itaque. Quae adipisci alias est similique eius doloremque.Really good, but could be improved in some areas.",
      date: "2022-02-15",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      username: "Leo Sunbeam",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "2022-03-10",
    },
    {
      rating: "⭐⭐⭐",
      username: "Lily Moon",
      review:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "2022-04-05",
    },
    {
      rating: "⭐⭐⭐⭐",
      username: "Finn River",
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "2022-05-20",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      username: "Zoe Starlight",
      review:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "2022-06-30",
    },
    {
      rating: "⭐⭐",
      username: "Ellie Rose",
      review:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "2022-07-15",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      username: "Max Wilder",
      review: "Perfect in every way, 5 stars!",
      date: "2022-08-25",
    },
  ];

  return (
    <>
      <div>
        <div className={css.header}>All Reviews</div>
        <div className={css.container}>
          {data.map((item, index) => {
            return (
              <div className={css.reviewCard} key={index}>
                {" "}
                <div className={css.rating}> {item.rating} </div>{" "}
                <div className={css.user}>{item.username}</div>
                <div className={css.revText}>{item.review}</div>
                <div className={css.revDate}>Posted on {item.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RatingSection;
