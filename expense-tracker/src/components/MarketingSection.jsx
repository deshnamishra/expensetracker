import React from 'react';

const MarketingSection = () => {
  const features = [
    {
      icon: "/api/placeholder/40/40",
      title: "Smart Analytics",
      description: "Get detailed insights into your spending patterns with intuitive charts and reports that help you make better financial decisions."
    },
    {
      icon: "/api/placeholder/40/40",
      title: "Mobile Friendly",
      description: "Track your expenses on the go with our fully responsive design. Available on any device, anytime, anywhere."
    },
    {
      icon: "/api/placeholder/40/40",
      title: "Real-time Tracking",
      description: "Monitor your expenses in real-time. Get instant updates and notifications to stay on top of your budget."
    },
    {
      icon: "/api/placeholder/40/40",
      title: "Secure & Private",
      description: "Your financial data is protected with bank-level security. We prioritize your privacy and data protection."
    }
  ];

  return (
    <section className="marketing-section">
      <div className="container">
        <h2 className="section-title">Why Choose Our Expense Tracker?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <img src={feature.icon} alt={`${feature.title} Icon`} />
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}