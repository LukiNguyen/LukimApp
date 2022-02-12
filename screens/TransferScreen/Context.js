import React, { createContext,useState } from 'react'; 
export const TransferContext = createContext()  

const TransferProvider = ({children}) => { 
    const [ data , setData] = useState( [
        {
            type:"send",
            date:"23/06/2022",
            moneyTotal:10000000, 
            status:"success"
        },
        {
          type:"drawal",
          date:"24/06/2022",
          moneyTotal:500000,
          status:"success" 
        },
        
        {
          type:"send",
          date:"14/12/2022",
          moneyTotal:5000000,
          status:"success" 
        },
        {
          type:"send",
          date:"15/12/2022",
          moneyTotal:500000,
          status:"fails" 
        },
        {
          type:"drawal",
          date:"18/06/2022",
          moneyTotal:1500000,
          status:"success" 
        },
        {
          type:"send",
          date:"01/01/2023",
          moneyTotal:500000,
          status:"success" 
        },
        {
          type:"send",
          date:"03/02/2023",
          moneyTotal:500000,
          status:"success" 
        },
        {
          type:"drawal",
          date:"23/06/2023",
          moneyTotal:500000,
          status:"success" 
        }, 
        {
          type:"drawal",
          date:"23/06/2023",
          moneyTotal:500000,
          status:"success" 
        }, 
        {
          type:"drawal",
          date:"23/06/2023",
          moneyTotal:500000,
          status:"success" 
        }, 
        {
          type:"drawal",
          date:"23/06/2023",
          moneyTotal:500000,
          status:"success" 
        }, 
         
    ])
    const [showFilter,setShowFilter] = useState(true)
    const [ optionTime, setOptionTime ] = useState("Tất cả")
    const [ optionStatus, setOptionStatus ] = useState("Tất cả") 
    const contextValues = {
        data,
        optionTime,
        setOptionTime,
        optionStatus,  
        setOptionStatus,
        showFilter,
        setShowFilter,
    } 

    return ( 
        <TransferContext.Provider value={contextValues} >
            { children }
        </TransferContext.Provider>
     );
}
 
export default TransferProvider;