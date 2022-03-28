import React from 'react'
import { ContHomeRoad } from '../styles/styles'
import Naveg from './Naveg'
import '../styles/style.css'

const Profile = () => {

  return (

        <div>
            <Naveg />

            <ContHomeRoad>
                <h2 style={{ color: 'yellow' }} >Mi Perfil</h2>
                <div class="page-content page-container" id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="col-xl-6 col-md-12">
                                <div class="card user-card-full">
                                    <div class="row m-l-0 m-r-0">
                                        <div class="col-sm-4 bg-c-lite-green user-profile">
                                            <div class="card-block text-center text-white">
                                                <div class="m-b-25">
                                                    <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                                <h6 class="f-w-600">Nombre</h6>
                                                <p>Apellido</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                            </div>
                                        </div>
                                        <div class="col-sm-8">
                                            <div class="card-block">
                                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Email</p>
                                                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
                                                    </div>
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Phone</p>
                                                        <h6 class="text-muted f-w-400">98979989898</h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-sm-6">
                                                        <p class="m-b-10 f-w-600">Fecha de Nacimiento</p>
                                                        <h6 class="text-muted f-w-400">Sept</h6>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <button type="button" class="btn btn-primary" data-toggle="dropdown">
                                                    Chat
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContHomeRoad>
        </div>
    )
}

export default Profile