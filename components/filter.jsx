import { Wrapper } from './filter.style'
import Image from 'next/image'

const FilterComponent = ({ filterText, onFilter }) => {
  return (
    <Wrapper className='bg-white rounded-xl px-2'>
      <input
        id="search"
        type="text"
        placeholder="Search by product name"
        ariaLabel="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <Image src='/icon/search.svg' alt='search' width={14} height={14} />
    </Wrapper>
  )
}

export default FilterComponent