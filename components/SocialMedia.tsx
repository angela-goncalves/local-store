export default function SocialMedia() {
    const URL = {
        twitter: "",
        instagram: "",
        whatssap: "",
        facebook: "",
    }
    return (
        <div className="flex flex-row justify-between">
            <a href={URL.twitter}><img src="../svg/twitter.svg" alt="twitter icon" className="w-8" /></a>
            <a href={URL.instagram}><img src="../svg/instagram.svg" alt="instagram icon" className="w-8" /></a>
            <a href={URL.whatssap}><img src="../svg/whatsapp.svg" alt="whatssapp icon" className="w-8" /></a>
            <a href={URL.facebook}><img src="../svg/facebook.svg" alt="facebook icon" className="w-8" /></a>
        </div>
    )
}