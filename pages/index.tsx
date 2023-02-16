import Head from "next/head";
import axios from "axios";

const defParams = {
  lang: 1,
  shop: 1,
};

const addStuff = (arr: number[]) => {
  axios
    .post(
      "https://lichi.com/api/cart/add",
      {
        ...defParams,
        id: arr,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
    });
};

const getStuff = () => {
  axios
    .post("https://lichi.com/api/cart/list", defParams, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
    });
};

const deleteStuff = (id: number, all: boolean) => {
  axios
    .post(
      "https://lichi.com/api/cart/remove",
      {
        ...defParams,
        id,
        all,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res);
    });
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Тестовое задание</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="buttons">
          <button onClick={() => addStuff([88250, 88248, 88249, 88247])}>
            Добавить товар
          </button>
          <button onClick={() => getStuff()}>Список товаров</button>
          <button onClick={() => deleteStuff(88248, false)}>
            Удалить товар
          </button>
        </div>
      </main>
    </>
  );
}
