import { useState , useEffect } from "react";
import axios from "axios";


function Todo(){
 
    const [todos,setTodo]=useState([])
    const [filter,setFilter]=useState(false)


    useEffect(()=>{
        const sendrequest= () => {
            axios({
              method: "get",
              url: "https://dummyjson.com/todos",
              params: {
                  _limit: 5
              }
            })
              .then((response) => setTodo(response.data.todos))
              .catch((error) => console.log(error));
          };
        
        
        sendrequest()
    },[])

 
  
    return(
        <>
       <div className="ml-[20%] mr-3 w-[78%]">
         
<div className="relative overflow-x-auto  ">
<div className="flex justify-center items-center mt-12">
   <button onClick={()=>setFilter(!filter)} className="border py-4 px-6 rounded-lg bg-purple-500  text-white font-bold">

    {filter ? <span>not filter</span> : <span>filter</span>
    }
   </button>
   
   </div>

{filter ? <div>
    <table className="w-full text-sm text-left text-gray-500 my-6">
    <caption className="text-green-600 font-bold text-2x"> Completed Todo</caption>

        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
         
            <tr>
                <th scope="col" className="p-4">
       
                </th>
                <th scope="col" className="px-6 py-3">
                todo
                </th>
                <th scope="col" className="px-6 py-3">
                userId
                </th>
              
           
            </tr>
        </thead>
        <tbody>
              {todos.map((todo, index) => (
        <>
         {todo.completed ? <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td className="w-4 p-4">
             <div className="flex items-center">
                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"/>
                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
             </div>
         </td>
         <td  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
             
             <div className="">
                 <div className="text-base font-semibold">{todo.todo}</div>
             
             </div>  
         </td>
         <td className="px-6 py-4">
           {todo.userId}
           
         </td>
     </tr> 
    : <></>
    }

        </>
            
 
            ))}
           
        </tbody>
    </table>

    <table className="w-full text-sm text-left text-gray-500 my-16">
    <caption className="text-red-600 font-bold text-2x">Not Completed Todo</caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
         
            <tr>
                <th scope="col" className="p-4">
       
                </th>
                <th scope="col" className="px-6 py-3">
                todo
                </th>
                <th scope="col" className="px-6 py-3">
                userId
                </th>
                
           
            </tr>
        </thead>
        <tbody>
              {todos.map((todo, index) => (
        <>
         {!todo.completed ? <tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td className="w-4 p-4">
             <div className="flex items-center">
                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"/>
                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
             </div>
         </td>
         <td  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
             
             <div className="">
                 <div className="text-base font-semibold">{todo.todo}</div>
             
             </div>  
         </td>
         <td className="px-6 py-4">
           {todo.userId}
           
         </td>
    
   
     </tr> 
    : <></>
    }

        </>
            
 
            ))}
           
        </tbody>
    </table>
</div> :
 <table className="w-full text-sm text-left text-gray-500 my-6">
 <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
  
     <tr>
         <th scope="col" className="p-4">

         </th>
         <th scope="col" className="px-6 py-3">
         todo
         </th>
         <th scope="col" className="px-6 py-3">
         userId
         </th>
         <th scope="col" className="px-6 py-3">
         completed
         </th>
    
     </tr>
 </thead>
 <tbody>
       {todos.map((todo, index) => (
  
<tr className="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td className="w-4 p-4">
             <div className="flex items-center">
                 <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2  dark:border-gray-600"/>
                 <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
             </div>
         </td>
         <td  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
             
             <div className="">
                 <div className="text-base font-semibold">{todo.todo}</div>
             
             </div>  
         </td>
         <td className="px-6 py-4">
           {todo.userId}
           
         </td>
         <td className="px-6 py-4">
           {todo.completed  ? 
           <span className="text-green-600 font-bold">true</span>
           : 
           <span className="text-red-600 font-bold">false</span>}
           
         </td>
   
     </tr>
     

     ))}
    
 </tbody>
</table>
}


   


  



</div>

       </div>
        </>
    )
}
    export default Todo;
