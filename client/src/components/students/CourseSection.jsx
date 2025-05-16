import { Link } from 'react-router-dom'

const CourseSection = () => {
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl text-gray-800 font-medium'>Learn from the best</h2>

      <p className='text-sm md:text-base text-gray-500 mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, consequuntur.</p>

      <Link to={'/course-list'} onClick={() => scroll(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
    </div>
  )
}

export default CourseSection