import React, { useContext } from "react";
import { BlogContext } from '../../Context/BlogContext';
import TextareaAutosize from 'react-textarea-autosize';

const BlogDataFormInput = (props) => {
  const { blogDataForm, formInputChange } = useContext(BlogContext);

  //CREATES LABEL OUT OF PATH STRING
  const lastPath = props.path.split('.').pop()
  const label = lastPath.split("_").map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')

  //FINDS VALUE OUT OF PATH STRING
  const valueArr = props.path.split(".")
  const value = () => {
    try {
      return valueArr.reduce((object, property) => object[property], blogDataForm.post)
    } catch {
      return ""
    }
  }

  return (
    <>
      <div className="data-form">
        <label>{label}:</label>
        {/* TEXTAREA VS. INPUT */}
        {props.inputType === "textarea" ? (
          <TextareaAutosize
            className={props.className ? props.className : ""}
            data-path={props.path}
            value={value()}
            onChange={formInputChange}
            style={{ resize: "none" }}
          />) : (<>
            {props.inputType === "blogBody" ? (
              <>
                <select className="admin-blog-input" data-path={props.path} onChange={formInputChange}>
                  <option disabled selected value> -- select an option -- </option>
                  <option value="text" selected={value() === "text" ? ("selected") : ("")}>
                    Text
                  </option>
                  <option value="embedded_video" selected={value() === "embedded_video" ? ("selected") : ("")}>
                    Embedded Video
                  </option>
                  <option value="link" selected={value() === "link" ? ("selected") : ("")}>
                    Link
                  </option>
                  <option value="image" selected={value() === "image" ? ("selected") : ("")}>
                    Image
                  </option>
                </select>
              </>) : (<>
                <input
                  className="management-input"
                  data-path={props.path}
                  value={value()}
                  onChange={formInputChange}
                  style={{ width: "100%" }}
                />
                <br></br>
              </>)}
          </>)}
      </div>
    </>
  )
}

export default BlogDataFormInput