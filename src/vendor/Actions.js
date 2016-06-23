import $ from "jquery";


export const saveEdited = (data) => {
  return {
    type: "SAVE_EDITED",
    data
  }
}

export const deleteItem = (id) => {
  return {
    type:"DELETE",
    id
  }
}

export const addNew = (data) => {
  $.ajax({
    method: 'POST',
    url: '/save',
    async: false,
    data: data,
  })
  console.log("Test");
  return {
    type: "SAVE_CONTACT",
    data
  }
}
