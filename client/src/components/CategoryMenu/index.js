import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

//
const [isClick, setIsClick] = useState(true);

const toggleColor = () => {
  setIsClick(!isClick); 
  console.log("test")
};

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div className="category-box">
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
        style={{
          backgroundColor: isClick ? "#f75c27" : "#f7c427",
        }}
          class="categoryBtn"
          key={item._id}
          onClick={() => {
            handleClick(item._id);
            toggleColor()

          }}
        >
          {item.name}
        </button>
        
      ))}
    </div>
  );
}

export default CategoryMenu;
