import Image from "next/image";
import styles from "./page.module.css";
import { AllCaps } from './components/allcaps.js';
import { Courses } from './components/courses.js';

export default function Home() {
  return (
    <main>
      <h1>Tony Alicea's Courses</h1>
      <AllCaps />
      <Courses />
    </main>
  );
}
