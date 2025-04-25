import React, { useState } from 'react';

const CommentComp = () => {
  const initialState = {
    name: '',
    email: '',
    comment: '',
    rating: 0
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleRating = (star) => {
    setFormData({
      ...formData,
      rating: star
    });
  };
  const validate=()=>{
    let errors={};
    if(formData.name == ""){
        errors.name=" Name is required";}
    if(formData.email == ""){
        errors.email="Email is required";
    }
    if(formData.comment == ""){  
        errors.comment="Please give your comment";}
    if(formData.rating == ""){
        errors.rating="Please give us rating";}
    
    setErrors(errors); 
    if(Object.keys(errors).length===0){
        return true;
        }else{
        return false;
         }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Submitted:', formData);
    alert('Form submitted successfully!');
    setFormData(initialState);
  };

  return (
    <>
       <div className="comment-container">
      <h4>Review Form</h4>
    <form onSubmit={handleSubmit}>
      <label className="comment-label">Rating</label>
        <div className="comment-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            className={formData.rating >= star ? 'selected' : ''}
            onClick={() => handleRating(star)}>★</span>)
        )}
        </div>
        {<div className="comment-error">{errors.rating}</div>}
        <label className="comment-label">Name</label>
        <input type="text"name="name" value={formData.name}onChange={handleChange} className="comment-input"/>
        { <div className="comment-error">{errors.name}</div>}
        <label className="comment-label">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="comment-input"/>
        {<div className="comment-error">{errors.email}</div>}
        <label className="comment-label">Comment</label>
        <textarea name="comment"value={formData.comment}onChange={handleChange}className="comment-textarea "/>
        {<div className="comment-error">{errors.comment}</div>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  )
;
}
export default CommentComp;


