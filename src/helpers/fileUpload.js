export const fileUpload = async (file) =>{

    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dvjowneom/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'Amazonas')
    formData.append('file', file)

 const resp = await fetch(cloudinaryURL, {
     method: 'POST',
     body: formData
 })

 const cloudinaryResp = await resp.json();
 return cloudinaryResp.secure_url

}