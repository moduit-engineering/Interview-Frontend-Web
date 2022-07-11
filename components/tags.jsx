import { isUndefined } from "lodash"
import { Wrapper } from './tags.style'

const TagsComponent = (props) => {
  
  if(!isUndefined(props.tags)){
    return(
    <Wrapper>
      <ul>
        {props.tags.map((tag, index) => {
          return (
            <li key={index}>{tag}</li>
          )
        })}
      </ul>
    </Wrapper>
  )}

  return (
    <div>-</div>
  )
}

export default TagsComponent