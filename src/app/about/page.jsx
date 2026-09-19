import Image from 'next/image';

export const metadata = {
  title: 'Anout',
  description: '...',
}
const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>

      {/* Unsplash Test Image */}
      <Image
        src="https://images.unsplash.com/photo-1789380146747-2531d7c17937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        width={300}
        height={300}
        alt="unsplash-img"
      />

      {/* Local Images */}
      <Image src="/sheldon.jpg" width={300} height={300} alt="Sheldon" />
      <Image src="/images/cena.jpg" width={300} height={300} alt="Cena" />
      <Image src="/images/hablu.JPG" width={300} height={300} alt="hablu" />
    </div>
  );
};

export default AboutPage;