import TodoItem from "../TodoItem/TodoItem";
let data = [
  {
    todo1: "Buy Grocerys",
  },
  {
    todo2: "Send Email",
  },
  {
    todo3: "Finish Assigment",
  },
  {
    todo4: "Write Blog",
  },
  {
    todo5: "Bake Cake",
  },
];
const MyList = () => {
  return (
    <article>
      <TodoItem item={data[0].todo1} />
      <TodoItem item={data[1].todo2} />
      <TodoItem item={data[2].todo3} />
      <TodoItem item={data[3].todo4} />
      <TodoItem item={data[4].todo5} />
    </article>
  );
};

export default MyList;
