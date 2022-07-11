const job = (data) => ({
  id: data.id,
  type: data.type,
  url: data.url,
  created_at: new Date(data.createdAt).toString(),
  company: data.company,
  company_url: data.companyUrl,
  location: data.location,
  title: data.title,
  description: data.description,
  how_to_apply: data.howToApply,
  company_logo: data.companyLogo,
});

module.exports = {
  job
};