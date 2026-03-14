/** @format */

import { ClientsHeading } from '../components/ClientsHeading';
import { ConnectTheTop } from '../components/ConnectTheTop';
import ExploreTrending from '../components/ExploreTrending';
import { FeaturedEnterpriseClients } from '../components/FeaturedEnterpriseClients';
import { FeaturedStartupClients } from '../components/FeaturedStartupClients';
import { HearFromClients } from '../components/HearFromClients';
import { JoinCommunity } from '../components/JoinCommunity';
import { ToptalDevelopers } from '../components/ToptalDevelopers';
import ClientSatification from "../components/ClientSatification";
import { TrustedByLeading } from '../components/TrustedByLeading';
import Footer from '../layouts/Footer';
import { Header } from '../layouts/Header';
import { PortfolioSection } from '../components/Portfolio';

export const Clients = () => {
	return (
		<>
			<Header />
			<ClientsHeading />
			{/* <FeaturedEnterpriseClients /> */}
			{/* <FeaturedStartupClients /> */}
			<PortfolioSection />
			<ClientSatification />
			<ConnectTheTop />
			<JoinCommunity />
			<Footer />
		</>
	);
};
