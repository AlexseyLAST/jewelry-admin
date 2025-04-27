import React, { useState, useEffect } from "react";
import Categoryitem from "./CategoryItem";
import { a } from "../../services/axiosinstance";
import LoadingGif from "./Loading";

function Categorylist() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        const res = await a.get("/categories"); 
        setCategories(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
        setError("Не удалось загрузить категории");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategories();
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <>
      {isLoading ? (
        <LoadingGif />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <Categoryitem key={category.id} category={category} index={index} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Categorylist;