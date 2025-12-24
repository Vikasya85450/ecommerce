import React, { useEffect, useState } from 'react'
import { getCategory } from '../../utils/api'
import { toast } from 'react-toastify'
import CategoryCard from '../../components/CategoryCard'
import Loader from '../../../components/Loader'
import EditCategoryModel from '../../components/EditCategoryModel'


const Category = () => {

  const [allCategory, setAllCategory] = useState([])
  const [Loading, setLoading] = useState(false)
  const [isEdit,setIsEdit]=useState(false);
  const [editData,setEditData]=useState(null)


  const handleOpenCategory =(data)=>{
    setEditData(data);
    
    setIsEdit(true);
  }

  useEffect(() => {
    const fetchDta = async () => {
      try {
        setLoading(true)
        const response = await getCategory();

        if (response.status == 'success') {
          setAllCategory(response.result)
        }

      } catch (error) {
        setLoading(false);
        toast.error("something went wrong ")
      } finally {
        setLoading(false)
      }
    }
    fetchDta();
  }, [])

  if (isEdit ){
    return <EditCategoryModel editData={editData}  setIsEdit={setIsEdit}/>
  }

  if (Loading) {
    return <div className='h-screen w-full flex justify-center items-center'>
      <Loader color={"text-black"} />
    </div>
  }
  if (allCategory.length === 0) {
    return <div className='flex justify-center items-center '> No category in database</div>
  }

  

  return (
    <div className='w-full grid p-4 grid-cols-4 gap-3 '>
      {
        allCategory.map((category, i) => <CategoryCard key={i} data={category}  handleOpenCategory={handleOpenCategory}/>)
      }
    </div>
  )
}

export default Category