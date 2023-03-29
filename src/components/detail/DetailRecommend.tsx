import React, { useEffect, useState } from "react";
import axios from "axios";
import { detailRecommendProps } from "./_detail.interface";
import CardItem from "../@common/product/CardItem";
import { getProductList } from "../../api/category/product";

export default function DetailRecommend({ category }: detailRecommendProps) {
    const [cardList, setCardList] = useState<Array<any> | null>();

    useEffect(() => {
        getProductList({ category: category }, 1, 6).then((response) => {
            setCardList(response.data.content);
        });
    }, [category]);

    return (
        <div className="detail-category-wrapper">
            <p className="category-title">같은 카테고리 상품 추천</p>
            <div className="category-list">
                {cardList &&
                    cardList.map((item) => {
                        return <CardItem key={item.id} item={item} />;
                    })}
            </div>
        </div>
    );
}
