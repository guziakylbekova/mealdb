import React from "react";

const IngredientList = ({ingredient}) => {

    return (
        <div className={'row'}>
            {
                ingredient.map((igredient, idx) =>
                    <div className=col-4 key={idx + ingredient}>
                        <div className="box">
                            <h5>
                                <link to={`/ingredient/${ingredient}`}/>
                                {ingredient}
                                <link/>
                            </h5>
                            <img src={"ingredient.img"}
                                 src={`https://www.themeldb.com/image/ingredients/${ingredient}.png`} alt=""/>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default IngredientList;