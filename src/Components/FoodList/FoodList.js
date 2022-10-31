import React from 'react';
import './FoodList.css';

const Food = ["흑돈집", "회먹구가", "C", "D", "E", "F"];
const FoodExplanation = ["백종원도 인정한 최고의 흑돼지 집! 서귀포 바다를 바라보며 먹는 오션뷰 대형 맛집", "쫄깃한 고등어회가 혀 안에서 춤춘다. 진정한 제주 맛집을 알고 싶다면 바로 여기", "CCCCCCCC", "DDDDDDDD", "EEEEEEEE", "FFFFFFFF"];

// 일단 임시로 배열로 선언
const FoodArray = [
    {
        "name": Food[0],
        "star": makeStar(5),
        "explanation": FoodExplanation[0],
        "img": "/Images/restaurant/blackpig.png",
        "place": "제주도 제주시 한림읍 198번지 23",
        "sns": 'https://www.instagram.com/blackpigzzang'
    },
    {
        "name": Food[1],
        "star": makeStar(5),
        "explanation": FoodExplanation[1],
        "img": "/Images/restaurant/godeung-eo.png",
        "place": "제주도 제주시 구좌읍 288번지 8",
        "sns": "https://www.instagram.com/godeung-eo-zzoa"
    },
    {
        "name": Food[2],
        "star": makeStar(3),
        "explanation": FoodExplanation[2]
    },
    {
        "name": Food[3],
        "star": makeStar(2),
        "explanation": FoodExplanation[3]
    },
    {
        "name": Food[4],
        "star": makeStar(4),
        "explanation": FoodExplanation[4]
    },
    {
        "name": Food[5],
        "star": makeStar(5),
        "explanation": FoodExplanation[5]
    },
    {
        "name": Food[0],
        "star": makeStar(4),
        "explanation": FoodExplanation[0]
    },
    {
        "name": Food[1],
        "star": makeStar(3),
        "explanation": FoodExplanation[1]
    },
    {
        "name": Food[2],
        "star": makeStar(3),
        "explanation": FoodExplanation[2]
    },
    {
        "name": Food[3],
        "star": makeStar(2),
        "explanation": FoodExplanation[3]
    },
    {
        "name": Food[4],
        "star": makeStar(4),
        "explanation": FoodExplanation[4]
    },
    {
        "name": Food[5],
        "star": makeStar(5),
        "explanation": FoodExplanation[5]
    }
]

function makeStar(star) {
    var starIcon = "";

    starIcon = "⭐️ ".repeat(star);
    starIcon += "     ".repeat(5 - star);

    return starIcon;
}

function FoodList() {

    const list = FoodArray.map((food, i) =>
        <div className='Food-List-Item-div'><p className='Food-List-Item'>🍚   {food.name}   {food.star}  {food.explanation}</p>
            <div className='Food-List-Item-Image-div' id={i}><img className='Food-List-Item-Image' src={food.img} alt={food.name} />
                <p>[ {food.name} ]</p><p>📍 {food.place}</p>🌐 <a href={food.sns}> {food.sns}</a></div></div>)

    return <div className='Food-List-Container'>{list}</div>
}

export default FoodList