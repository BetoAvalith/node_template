import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String            
        },
        password: {
            type: String
        },
        role: {
            type: ['user', 'admin'],
            default: 'user'
        }
    },
    {
        timestamps: true, // createdAt, updatedAt
        versionKey: false
    }
)

export const usersModel = mongoose.model('users', UserSchema);