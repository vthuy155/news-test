import React, { useEffect, useState, CSSProperties } from 'react'
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

type Props = {}
const override: CSSProperties = {
  margin: "auto"
};
const PostDetail = (props: Props) => {
  let [color, setColor] = useState("#36d7b7");
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)

  }, [])
  return (
    <div className='min-h-screen'>
      {loading ?
        <div className='flex justify-center pt-44'>
          <HashLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <div>
          <img className='w-full rounded-b-2xl' src="https://firebasestorage.googleapis.com/v0/b/uploadimg-d0ad3.appspot.com/o/nhin%20lai%202022.png?alt=media&token=5b179272-07bd-4474-9700-c74c518bd034" alt="" />
          <Link className='flex justify-center mt-12 mb-16' to={`/suctre70`}><button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-black rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-blue-500 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
              Quay lại trang bài viết
            </span>
          </button></Link>
        </div>
      }
    </div>
  )
}

export default PostDetail