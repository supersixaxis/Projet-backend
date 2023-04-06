const passwordValidator = require('password-validator');

//création du schema
let passwordSchema = new passwordValidator();

//le schéma que doit respecteur le mot de passe
passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(20)                                  // Maximum length 20
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

console.log("--->CONTENU passwordSchema");
console.log(passwordSchema);

//Vérification de la qualité du password par rapport au schema
module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
      return res.status(400).json({ error : "Le mot de passe n'est pas assez fort : " + passwordSchema.validate(req.body.password, { list: true }) });
  } else {
      next();
  }
}