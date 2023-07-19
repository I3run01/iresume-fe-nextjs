import {  DashboardLayout } from '@/layouts/dashboardLayout/dashboardLayout'
import { RootState } from '@/redux/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { SocialMediasDiv } from '@/styles/social-mideas.module'
import { useRouter } from 'next/router'

type socialMediasType = {
    title: string
    link: string
};

const SocialMedias = () => {
    const [socialMedias, setSocialMedias] = useState<socialMediasType[]>([]);
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const user = useSelector((state: RootState) => state.user.user);
    const router = useRouter()
    const { id } = router.query;

    useEffect(() => {
        if(!user) router.push('../middlewarePage')
    }, [])

    useEffect(() => {
        //TODO: send the list to database
    }, [socialMedias])

    const addNewItem = () => {
        setSocialMedias(prevState => [...prevState, { title: '', link: '' }]);
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
        const newSocialMedias = [...socialMedias];
        newSocialMedias[key].title = e.target.value;
        setSocialMedias(newSocialMedias);
    };

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
        const newSocialMedias = [...socialMedias];
        newSocialMedias[key].link = e.target.value;
        setSocialMedias(newSocialMedias);
    };

    const deleteItem = (key: number) => {
        setSocialMedias(prevState => prevState.filter((item, index) => index !== key));
    };

    return (
        <DashboardLayout
            main={
                <SocialMediasDiv isDark={isDark}>
                    <h1>Please share your online profiles, such as GitHub, LinkedIn, portfolio, etc.</h1>
                    {socialMedias.map((item, key) => (
                        <div key={key} className='container'>
                            <input

                                type="text"
                                value={item.title}
                                placeholder="social media"
                                onChange={(e) => handleTitleChange(e, key)}
                            />

                            <input
                                type="text"
                                value={item.link}
                                placeholder="link of social media"
                                onChange={(e) => handleLinkChange(e, key)}
                            />

                            <div onClick={() => deleteItem(key)} className='deleteButton'>
                                Delete
                            </div>

                        </div>
                    ))}

                    <div onClick={addNewItem} className='addItem'>
                        add new link
                    </div>
                </SocialMediasDiv>
            }

            nextRouter={`./${id}/resume`}
            previousRouter={`./${id}/personal-datas`}
        />
    )
}

export default SocialMedias