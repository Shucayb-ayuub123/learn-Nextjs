import { useState, useEffect } from "react";
import { Trash, Edit, Calendar } from "lucide-react";
import tick from "../assets/check-mark.png";
import axios from "axios";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import { Fragment } from "react";

type User_task = {
  Task_id?: number | undefined;
  Task_title: string;
  Description: string;
  Date1: string;
  complete?: boolean;
};

type Update = {
  task1?: User_task;
  Oncancel: () => void;
  refreshTask: () => void;
};

const Tasks = ({
  task,
  refreshTask,
}: {
  task?: User_task[];
  refreshTask: () => void;
}) => {
  // Local state for tasks
  const [taskList, setTaskList] = useState<User_task[]>(task || []);

  const [EditTask, setEdit] = useState<number | undefined>();
  const [show , setShow] = useState<boolean>(false)
  // Keep local state updated when parent sends new tasks
  useEffect(() => {
    setTaskList(task || []);
  }, [task]);

  useEffect(() => {
    setShow(true)
  } , [])

  async function toggleCheck(id?: number ) {
    if(!id) {
      return;
    }
    await axios.put(`http://localhost:3000/task/ToggleTask/${id}`);
    await refreshTask(); // 🔥 refresh Dashboard state  
  }

  async function handleDelete(Task_id: number | undefined) {
    if (!Task_id) {
      return;
    }
    await axios.delete(`http://localhost:3000/task/DeleteTask/${Task_id}`);

    setTaskList((prev) => prev.filter((task) => task.Task_id !== Task_id));
    
    await refreshTask()
  }

  function isOverdue(taskDate: string): boolean {
    const today = new Date();
    const taskday = new Date(taskDate);
    return taskday < today;
  }
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-4 mt-10">
      { taskList.length >= 1 ? taskList.map((t , index) => (
        <Fragment key={t.Task_id}>
          {EditTask === t.Task_id ? (
            <UpadateTask
              task1={t}
              refreshTask={refreshTask}
              Oncancel={() => setEdit(undefined)}
            />
          ) : (
            <div
              className={`w-11/12 md:w-8/12 sm:w-11/12 flex space-x-3 group  transition-all transform duration-500 ease-out hover:shadow-lg ${
                t.complete ? "hover:border-0" : ""
              } shadow p-5 hover:border-[0.2px] ${
                isOverdue(t.Date1)
                  ? "bg-red-50 border-[0.2px] border-red-300"
                  : ""
              } hover:border-cyan-500 rounded-lg animate-task`}
              style={{transitionDelay : `${index * 80}`}}>
              <div className={`w-full flex space-x-4 transform transition-all duration-150 ${show  ? "opacity-100 translate-x-6" : "opacity-0 translate-x-0"} `}>
                <input
                  type="checkbox"
                  checked={t.complete}
                  onChange={() => toggleCheck(t.Task_id)}
                  className="w-5 h-5 rounded border-2 border-cyan-500 checked:bg-cyan-500 checked:border-cyan-500 cursor-pointer"
                />

                <div className="space-y-2 mt-0 mb-4">
                  <h1
                    className={`text-xl font-bold ${
                      t.complete ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {t.Task_title}
                  </h1>

                  <p
                    className={`text-gray-500 text-sm font-sans ${
                      t.complete ? "line-through" : ""
                    }`}
                  >
                    {t.Description}
                  </p>

                  <h3
                    className={`flex space-x-5 font-semibold font-sans ${
                      t.complete ? "line-through text-gray-400" : ""
                    } ${isOverdue(t.Date1) ? "text-red-600" : ""}`}
                  >
                    <Calendar className="mr-2" />
                    {t.Date1
                      ? isOverdue(t.Date1)
                        ? `${t.Date1.split("T")[0]} (overdue)`
                        : t.Date1.split("T")[0]
                      : "Do date"}
                  </h3>
                </div>

                <div className="ms-auto flex space-x-3">
                  <div className="flex lg:hidden group-hover:flex space-x-2">
                    <div
                      className="hover:bg-cyan-300 rounded-sm h-10 w-10 flex justify-center items-center"
                      onClick={() => setEdit(t.Task_id!)}
                    >
                      <Edit
                        className={`w-5 h-5 ${
                          t.complete ? "text-gray-400" : ""
                        }`}
                      />
                    </div>

                    <div
                      className="hover:bg-red-300 rounded-sm h-10 w-10 flex justify-center items-center"
                      onClick={() => handleDelete(t.Task_id)}
                    >
                      <Trash className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fragment>
      ))  : (
        <div className="w-8/12 justify-center items-center mt-2">
          <div className="flex justify-center items-center flex-col mt-4 w-full space-y-2">
             <div className="bg-gray-200 p-2 rounded-4xl">
             <img src={tick} alt="" width={50}/>

             </div>
             <h2 className="text-black font-semibold">No tasks yet</h2>
             <p className="text-gray-400">Create your first task to get started with organizing your day</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Tasks;

const UpadateTask = ({ task1, Oncancel, refreshTask }: Update) => {
  const [Task_E, setTask] = useState<User_task>({
    Task_id: task1?.Task_id || undefined,
    Task_title: task1?.Task_title || "",
    Description: task1?.Description || "",
    Date1: task1?.Date1 || "",
    complete: task1?.complete || false,
  });

  useEffect(() => {
    if (task1) {
      setTask(task1);
    }
  }, [task1]);

  async function HandleEdit(Task_id: number | undefined) {
    if (!Task_id) {
      return;
    }
    try {
      await axios.put(`http://localhost:3000/task/EditTask/${Task_id}`, Task_E);

      await refreshTask();
      Oncancel();
    } catch (err) {
      alert("failed to upload");
    }
  }

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-11/12 md:w-8/12 sm:w-11/12 rounded-md  bg-white shadow-sm flex-col  p-4 space-y-3 border-2 border-gray-100 animate-in fade-in-5 slide-in-from-top-4 duration-500 ">
        <input
          type="text"
          value={Task_E.Task_title}
          onChange={(e) => setTask({ ...Task_E, Task_title: e.target.value })}
          placeholder="title Task"
          className="w-full border-2 h-10 px-2 font-semibold rounded-sm focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none"
        />
        <textarea
          placeholder="Description"
          rows={4}
          cols={10}
          value={Task_E.Description}
          onChange={(e) => setTask({ ...Task_E, Description: e.target.value })}
          className="w-full border-2  rounded-sm px-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:ring-offset-2 "
        ></textarea>
        <input
          type="date"
          value={Task_E.Date1 ? Task_E.Date1.split("T")[0] : ""}
          onChange={(e) => setTask({ ...Task_E, Date1: e.target.value })}
          className="w-full border-2 h-11 px-2 rounded-sm focus:ring-1 ring-amber-100"
        />
        <div className="flex space-x-3  w-full">
          <button
            className="w-11/12 flex justify-center items-center space-x-6 h-11 rounded-md text-white font-semibold bg-cyan-600 hover:bg-amber-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={
              !Task_E?.Description && !Task_E?.Task_title && !Task_E?.Date1
            }
            onClick={() => HandleEdit(Task_E.Task_id)}
          >
            <Check size={25} />
            Save
          </button>
          <button
            className="bg-gray-200 px-5 font-semibold flex justify-center 
          items-center rounded-md flex-1
           hover:bg-amber-500 hover:text-white"
            onClick={() => Oncancel()}
          >
            <X />
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};