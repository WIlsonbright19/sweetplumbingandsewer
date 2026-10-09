import heroImage from '../assets/images/hero_sweet_plumbing_1791541188852.jpg';
import sewerImage from '../assets/images/sewer_sweet_plumbing_1791541207696.jpg';
import drainImage from '../assets/images/drain_sweet_plumbing_1791541271619.jpg';
import cameraImage from '../assets/images/camera_sweet_plumbing_1791541280654.jpg';
import leakImage from '../assets/images/service_leak_detection_1791539369350.jpg';
import heaterImage from '../assets/images/service_water_heater_1791539380089.jpg';
import fixturesImage from '../assets/images/commercial_plumbing_sweet_1791541220324.jpg';
import vanImage from '../assets/images/sweet_plumbing_van_1791541198520.jpg';
import areaBackgroundImage from '../assets/images/bg_miami_community_1791542848583.jpg';
import finalCtaBackgroundImage from '../assets/images/bg_plumbing_network_1791542808227.jpg';

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const IMAGES: Record<string, ImageSlot> = {
  heroImage: {
    src: heroImage,
    alt: 'Sweet Plumbing & Sewer master technician inspecting residential water heater and pipes',
    width: 1400,
    height: 1050,
  },
  serviceSewer: {
    src: sewerImage,
    alt: 'Sweet Plumbing & Sewer crew performing trenchless sewer line repair and rehabilitation',
    width: 1400,
    height: 1050,
  },
  serviceDrain: {
    src: drainImage,
    alt: 'Sweet Plumbing & Sewer technician clearing clogged residential drain with motorized machine',
    width: 1400,
    height: 1050,
  },
  serviceCamera: {
    src: cameraImage,
    alt: 'Sweet Plumbing & Sewer technician diagnosing pipe interior with color camera monitor',
    width: 1400,
    height: 1050,
  },
  serviceLeak: {
    src: leakImage,
    alt: 'Sweet Plumbing & Sewer acoustic electronic leak detection for concealed pipe leaks',
    width: 1400,
    height: 1050,
  },
  serviceHeater: {
    src: heaterImage,
    alt: 'Sweet Plumbing & Sewer professional water heater installation with brass safety valves',
    width: 1400,
    height: 1050,
  },
  serviceFixtures: {
    src: fixturesImage,
    alt: 'Sweet Plumbing & Sewer technician adjusting commercial water valves and pipe fixtures',
    width: 1400,
    height: 1050,
  },
  areaImage: {
    src: vanImage,
    alt: 'Sweet Plumbing & Sewer service van parked in North Miami Beach, FL community',
    width: 1400,
    height: 1050,
  },
  serviceVan: {
    src: vanImage,
    alt: 'Sweet Plumbing & Sewer branded commercial service vehicle in Miami-Dade County',
    width: 1400,
    height: 1050,
  },
  commercialWork: {
    src: fixturesImage,
    alt: 'Sweet Plumbing & Sewer commercial piping and valve diagnostics in Miami facility',
    width: 1400,
    height: 1050,
  },
  areaBackground: {
    src: areaBackgroundImage,
    alt: '',
    width: 1400,
    height: 1050,
  },
  finalCtaBackground: {
    src: finalCtaBackgroundImage,
    alt: '',
    width: 1400,
    height: 1050,
  },
};
