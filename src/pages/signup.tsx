import { SignupDiv } from '@/styles/signup.module'
import { User } from '@/requests/user'
import { useEffect, useState } from 'react'
import { GoogleButton } from '@/components/loginWithGoogle/loginWithGoogle'
import Link from 'next/link'
import Image from 'next/image'
import backButton from '../../public/images/icons/backButton.svg'
import { useQuery } from 'react-query';
import { Loading } from '@/components/loading'
import { useTranslation } from 'react-i18next';

const SignUp = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [corretEmail, setCorrectEmail] = useState<boolean>(false)
    const [mathPassword, setMathPassword] = useState<boolean>(false)
    const { t } = useTranslation();

    const { data, error, refetch, isFetching } = useQuery(['signin'], async () => {
        if(!corretEmail && !mathPassword) return
        
        
        let response = await new User().signUp(email, password)
        let json = JSON.parse(response)
        return json
        },
        {
            enabled: false,
        }
    );

    useEffect(() => {
        if(!data) return
        alert(t("coming_soon"))
    }, [data])

    useEffect(() => {
        if(!error) return
        alert(error)
    }, [error])

    useEffect(() => {
        correctDatas()
    }, [email, password, confirmPassword])

    const isValidEmail = (email: string): Boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        return emailRegex.test(email);
    }

    const correctDatas = (): void => {
        isValidEmail(email) ? setCorrectEmail(true) : setCorrectEmail(false)
        password === confirmPassword && password ? setMathPassword(true) : setMathPassword(false)
    }


    return (
        <>
            {isFetching && <Loading/>}
            
            <SignupDiv
                correctEmail={corretEmail}
                mathPassword={mathPassword}
            >
                <form id='container'>
                    <Link href={'/'} className='backButton'>
                        <Image
                            src={backButton}
                            alt='back button' 
                        />
                    </Link>

                    <input type="text" placeholder={t("email")} name='Email'               onChange={(event)=>{setEmail(event.target.value)}}/>
                    <p className='corretEmail'>{corretEmail ? t("email_correct") : t("email_incorrect")}</p>

                    <input type="password" placeholder={t("password")} 
                    onChange={(event)=>{setPassword(event.target.value)}}/>
                    <p className='mathPassword'>{mathPassword ? t("password_match") : t("passwords_not_match")}</p>


                    <input type="password" placeholder={t("confirm_password")}
                    onChange={(event)=>{setConfirmPassword(event.target.value)}}/>
                    <p className='mathPassword'>{mathPassword ? t("password_match") : t("passwords_not_match")}</p>

                    <div id='submit' onClick={() => refetch()}>{t("submit")}</div>
                    
                    <GoogleButton/>

                </form>
            </SignupDiv>
        </>
    )
}

export default SignUp