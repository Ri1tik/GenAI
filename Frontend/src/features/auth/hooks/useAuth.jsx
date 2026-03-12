import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)

    const { user, setUser, loading, setLoading } = context

    const loginHandle = async (data) => {
        setLoading(true)
        try {
            const response = await login(data)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const registerHandle = async (data) => {
        setLoading(true)
        try {
            const response = await register(data)
            setUser(response.user)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    const logoutHandle = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return { user, loading, loginHandle, registerHandle, logoutHandle }
}