import Wrapper from '../wrapper';

const Images = ({
    Img1,
    Img2,
    Img3,
}: {
    Img1: string;
    Img2: string;
    Img3: string;
}) => {
    return (
        <Wrapper>
            <div className="flex items-center justify-evenly mt-3 gap-4 tablet:flex-col tablet:gap-6    ">
                <img
                    src={Img1}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
                <img
                    src={Img2}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
                <img
                    src={Img3}
                    alt="Alexandra profile"
                    width="350"
                    height="350"
                />
            </div>
        </Wrapper>
    );
};

export default Images;
