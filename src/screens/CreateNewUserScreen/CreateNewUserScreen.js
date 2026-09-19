import { useRef, useState } from 'react';

import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

import Sidebar from '../../components/Sidebar/Sidebar';


export default function CreateNewUserScreen({ navigation }) {

  // --------------------------------------------------
  // FORM STATE
  // --------------------------------------------------

  const [passportPhoto, setPassportPhoto] = useState(null);

  const [serviceNumber, setServiceNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rank, setRank] = useState('');

  const [stateCommand, setStateCommand] = useState('');
  const [areaZone, setAreaZone] = useState('');
  const [divisionUnit, setDivisionUnit] = useState('');
  const [role, setRole] = useState('');

  const [username, setUsername] = useState('');
  const [temporaryPassword, setTemporaryPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [accountStatus, setAccountStatus] = useState('Active');
  const [firstLogin, setFirstLogin] = useState(true);

  const [deviceType, setDeviceType] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [trustedDevice, setTrustedDevice] = useState(false);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);


  // --------------------------------------------------
  // DROPDOWN OPTIONS
  // --------------------------------------------------

  const rankOptions = [
    'ASP',
    'Inspector',
    'Assistant Superintendent',
    'Deputy Superintendent',
    'Superintendent',
    'Chief Superintendent',
  ];

  const stateCommandOptions = [
    'Abuja Command',
    'Kaduna Command',
    'Kano Command',
    'Lagos Command',
    'Rivers Command',
  ];

  const areaZoneOptions = [
    'Zone 1',
    'Zone 2',
    'Zone 3',
    'Zone 4',
    'Zone 5',
  ];

  const divisionUnitOptions = [
    'Administration',
    'Operations',
    'Intelligence',
    'Investigation',
    'Technical Services',
    'Fire Service',
  ];

  const roleOptions = [
    'Officer',
    'Supervisor',
    'Administrator',
    'Intelligence Officer',
    'Senior Officer',
  ];

  const deviceTypeOptions = [
    'Android',
    'iPhone',
    'Tablet',
    'Other',
  ];


  // --------------------------------------------------
  // PASSPORT PHOTO
  // --------------------------------------------------

  const handleSelectPassportPhoto = async () => {

    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return;
    }

    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [3, 4],
        quality: 0.9,
      });

    if (!result.canceled) {
      setPassportPhoto(result.assets[0].uri);

      setErrors((previous) => ({
        ...previous,
        passportPhoto: '',
      }));
    }
  };


  // --------------------------------------------------
  // DROPDOWN HANDLERS
  // --------------------------------------------------

  const closeDropdown = () => {

    setOpenDropdown(null);
    setActiveDropdown(null);
  };


  const handleDropdownPress = (name, dropdown) => {

    if (openDropdown === name) {
      closeDropdown();
    } else {
      setOpenDropdown(name);
      setActiveDropdown(dropdown);
    }
  };


  const handleSelectOption = (
    name,
    value,
    setter
  ) => {

    setter(value);

    closeDropdown();

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }));
  };


  // --------------------------------------------------
  // VALIDATION
  // --------------------------------------------------

  const validateForm = () => {

    const newErrors = {};

    if (!serviceNumber.trim()) {
      newErrors.serviceNumber =
        'Service number is required.';
    }

    if (!firstName.trim()) {
      newErrors.firstName =
        'First name is required.';
    }

    if (!lastName.trim()) {
      newErrors.lastName =
        'Last name is required.';
    }

    if (!rank) {
      newErrors.rank =
        'Rank is required.';
    }

    if (!stateCommand) {
      newErrors.stateCommand =
        'State / Command is required.';
    }

    if (!areaZone) {
      newErrors.areaZone =
        'Area / Zone is required.';
    }

    if (!divisionUnit) {
      newErrors.divisionUnit =
        'Division / Unit is required.';
    }

    if (!role) {
      newErrors.role =
        'Role is required.';
    }

    if (!username.trim()) {
      newErrors.username =
        'Username is required.';
    }

    if (!temporaryPassword.trim()) {
      newErrors.temporaryPassword =
        'Temporary password is required.';
    } else if (temporaryPassword.length < 6) {
      newErrors.temporaryPassword =
        'Password must contain at least 6 characters.';
    }

    if (!passportPhoto) {
      newErrors.passportPhoto =
        'Passport photograph is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  // --------------------------------------------------
  // FRONTEND CREATE USER
  // --------------------------------------------------

  const handleCreateUser = () => {

    setSuccessMessage('');

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // FRONTEND ONLY
    // No backend request is made here.

    setSuccessMessage(
      'User information is complete and ready to be submitted.'
    );

    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };


  // --------------------------------------------------
  // SCREEN
  // --------------------------------------------------

  return (
    <>
    <View style={styles.container}>

      <Sidebar
        activeItem="Create New User"
        navigation={navigation}
      />


      <View style={styles.content}>

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.pageTitle}>
              Create New User
            </Text>

            <Text style={styles.subtitle}>
              Register a new officer and configure their application access
            </Text>

          </View>

          <View style={styles.headerActions}>

            <Ionicons
              name="person-add-outline"
              size={22}
              color="#4B5320"
            />

          </View>

        </View>


        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.formCard}>


            {/* SUCCESS MESSAGE */}

            {successMessage ? (
              <View style={styles.successMessage}>

                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color="#4B5320"
                />

                <Text style={styles.successText}>
                  {successMessage}
                </Text>

              </View>
            ) : null}


            {/* ====================================== */}
            {/* PERSONAL INFORMATION */}
            {/* ====================================== */}

            <View style={[styles.section, styles.personalSection]}>

              <View style={styles.sectionHeader}>

                <View style={styles.sectionIcon}>

                  <Ionicons
                    name="person-outline"
                    size={17}
                    color="#4B5320"
                  />

                </View>

                <View>

                  <Text style={styles.sectionTitle}>
                    PERSONAL INFORMATION
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Basic information about the officer
                  </Text>

                </View>

              </View>


              <View style={styles.divider} />


              <View style={styles.personalInformationBody}>

                <View style={styles.personalFields}>

                  <View style={styles.formRow}>

                    <InputField
                      label="Service Number"
                      required
                      placeholder="Enter service number"
                      value={serviceNumber}
                      onChangeText={setServiceNumber}
                      error={errors.serviceNumber}
                    />

                    <InputField
                      label="First Name"
                      required
                      placeholder="Enter first name"
                      value={firstName}
                      onChangeText={setFirstName}
                      error={errors.firstName}
                    />

                    <InputField
                      label="Last Name"
                      required
                      placeholder="Enter last name"
                      value={lastName}
                      onChangeText={setLastName}
                      error={errors.lastName}
                    />

                  </View>


                  <View style={styles.formRow}>

                    <DropdownField
                      label="Rank"
                      required
                      placeholder="Select rank"
                      value={rank}
                      options={rankOptions}
                      openDropdown={openDropdown}
                      dropdownName="rank"
                      onPress={handleDropdownPress}
                      onSelect={(value) =>
                        handleSelectOption(
                          'rank',
                          value,
                          setRank
                        )
                      }
                      error={errors.rank}
                    />

                  </View>

                </View>


                {/* PASSPORT PHOTO */}

                <View style={styles.passportContainer}>

                  <Text style={styles.label}>
                    Passport Photograph
                    <Text style={styles.required}> *</Text>
                  </Text>


                  <Pressable
                    style={[
                      styles.passportBox,
                      errors.passportPhoto &&
                        styles.passportBoxError,
                    ]}
                    onPress={handleSelectPassportPhoto}
                  >

                    {passportPhoto ? (

                      <Image
                        source={{
                          uri: passportPhoto,
                        }}
                        style={styles.passportImage}
                      />

                    ) : (

                      <>
                        <Ionicons
                          name="camera-outline"
                          size={28}
                          color="#777777"
                        />

                        <Text style={styles.uploadPhotoText}>
                          Upload Photo
                        </Text>
                      </>

                    )}

                  </Pressable>


                  {errors.passportPhoto ? (
                    <Text style={styles.errorText}>
                      {errors.passportPhoto}
                    </Text>
                  ) : null}

                </View>

              </View>

            </View>


            {/* ====================================== */}
            {/* ORGANIZATIONAL INFORMATION */}
            {/* ====================================== */}

            <View
              style={[
                styles.section,
                styles.organizationSection,
              ]}
            >

              <View style={styles.sectionHeader}>

                <View style={styles.sectionIcon}>

                  <Ionicons
                    name="business-outline"
                    size={17}
                    color="#4B5320"
                  />

                </View>

                <View>

                  <Text style={styles.sectionTitle}>
                    ORGANIZATIONAL INFORMATION
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Assign the officer to an organizational structure
                  </Text>

                </View>

              </View>


              <View style={styles.divider} />


              <View style={styles.formRow}>

                <DropdownField
                  label="State / Command"
                  required
                  placeholder="Select state / command"
                  value={stateCommand}
                  options={stateCommandOptions}
                  openDropdown={openDropdown}
                  dropdownName="stateCommand"
                  onPress={handleDropdownPress}
                  onSelect={(value) =>
                    handleSelectOption(
                      'stateCommand',
                      value,
                      setStateCommand
                    )
                  }
                  error={errors.stateCommand}
                />


                <DropdownField
                  label="Area / Zone"
                  required
                  placeholder="Select area / zone"
                  value={areaZone}
                  options={areaZoneOptions}
                  openDropdown={openDropdown}
                  dropdownName="areaZone"
                  onPress={handleDropdownPress}
                  onSelect={(value) =>
                    handleSelectOption(
                      'areaZone',
                      value,
                      setAreaZone
                    )
                  }
                  error={errors.areaZone}
                />


                <DropdownField
                  label="Division / Unit"
                  required
                  placeholder="Select division / unit"
                  value={divisionUnit}
                  options={divisionUnitOptions}
                  openDropdown={openDropdown}
                  dropdownName="divisionUnit"
                  onPress={handleDropdownPress}
                  onSelect={(value) =>
                    handleSelectOption(
                      'divisionUnit',
                      value,
                      setDivisionUnit
                    )
                  }
                  error={errors.divisionUnit}
                />

              </View>


              <View style={styles.formRow}>

                <DropdownField
                  label="Role"
                  required
                  placeholder="Select role"
                  value={role}
                  options={roleOptions}
                  openDropdown={openDropdown}
                  dropdownName="role"
                  onPress={handleDropdownPress}
                  onSelect={(value) =>
                    handleSelectOption(
                      'role',
                      value,
                      setRole
                    )
                  }
                  error={errors.role}
                />

              </View>

            </View>


            {/* ====================================== */}
            {/* ACCOUNT INFORMATION */}
            {/* ====================================== */}

            <View
              style={[
                styles.section,
                styles.accountSection,
              ]}
            >

              <View style={styles.sectionHeader}>

                <View style={styles.sectionIcon}>

                  <Ionicons
                    name="lock-closed-outline"
                    size={17}
                    color="#4B5320"
                  />

                </View>

                <View>

                  <Text style={styles.sectionTitle}>
                    ACCOUNT INFORMATION
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Configure the officer's application account
                  </Text>

                </View>

              </View>


              <View style={styles.divider} />


              <View style={styles.formRow}>

                <InputField
                  label="Username"
                  required
                  placeholder="Enter username"
                  value={username}
                  onChangeText={setUsername}
                  error={errors.username}
                />


                <View style={styles.field}>

                  <View style={styles.labelRow}>

                    <Text style={styles.label}>
                      User ID
                    </Text>

                    <View style={styles.autoBadge}>

                      <Text style={styles.autoBadgeText}>
                        AUTO
                      </Text>

                    </View>

                  </View>


                  <View style={styles.disabledInput}>

                    <Text style={styles.generatedText}>
                      Generated automatically
                    </Text>

                    <Ionicons
                      name="lock-closed-outline"
                      size={15}
                      color="#999999"
                    />

                  </View>

                </View>


                <View style={styles.field}>

                  <Text style={styles.label}>
                    Temporary Password
                    <Text style={styles.required}> *</Text>
                  </Text>


                  <View
                    style={[
                      styles.passwordContainer,
                      errors.temporaryPassword &&
                        styles.inputError,
                    ]}
                  >

                    <TextInput
                      value={temporaryPassword}
                      onChangeText={setTemporaryPassword}
                      placeholder="Enter temporary password"
                      placeholderTextColor="#9A9A9A"
                      secureTextEntry={!showPassword}
                      style={styles.passwordInput}
                    />


                    <Pressable
                      onPress={() =>
                        setShowPassword(!showPassword)
                      }
                      style={styles.eyeButton}
                    >

                      <Ionicons
                        name={
                          showPassword
                            ? 'eye-off-outline'
                            : 'eye-outline'
                        }
                        size={18}
                        color="#777777"
                      />

                    </Pressable>

                  </View>


                  {errors.temporaryPassword ? (
                    <Text style={styles.errorText}>
                      {errors.temporaryPassword}
                    </Text>
                  ) : null}

                </View>

              </View>


              <View style={styles.formRow}>

                <View style={styles.field}>

                  <Text style={styles.label}>
                    Account Status
                  </Text>


                  <View style={styles.statusSelector}>

                    <View style={styles.statusLeft}>

                      <View
                        style={[
                          styles.statusDot,
                          {
                            backgroundColor:
                              accountStatus === 'Active'
                                ? '#4B5320'
                                : '#999999',
                          },
                        ]}
                      />

                      <Text style={styles.selectorText}>
                        {accountStatus}
                      </Text>

                    </View>


                    <Ionicons
                      name="chevron-down-outline"
                      size={16}
                      color="#555555"
                    />

                  </View>

                </View>


                <ToggleField
                  label="First Login"
                  description="Require password change on first login"
                  value={firstLogin}
                  onChange={() =>
                    setFirstLogin(!firstLogin)
                  }
                />

              </View>

            </View>


            {/* ====================================== */}
            {/* DEVICE INFORMATION */}
            {/* ====================================== */}

            <View
              style={[
                styles.section,
                styles.deviceSection,
              ]}
            >

              <View style={styles.sectionHeader}>

                <View style={styles.sectionIcon}>

                  <Ionicons
                    name="phone-portrait-outline"
                    size={17}
                    color="#4B5320"
                  />

                </View>

                <View>

                  <Text style={styles.sectionTitle}>
                    DEVICE INFORMATION
                  </Text>

                  <Text style={styles.sectionSubtitle}>
                    Configure the officer's registered device
                  </Text>

                </View>

              </View>


              <View style={styles.divider} />


              <View style={styles.formRow}>

                <DropdownField
                  label="Device Type"
                  placeholder="Select device type"
                  value={deviceType}
                  options={deviceTypeOptions}
                  openDropdown={openDropdown}
                  dropdownName="deviceType"
                  onPress={handleDropdownPress}
                  onSelect={(value) =>
                    handleSelectOption(
                      'deviceType',
                      value,
                      setDeviceType
                    )
                  }
                />


                <InputField
                  label="Device ID / Serial Number"
                  placeholder="Enter device ID or serial number"
                  value={deviceId}
                  onChangeText={setDeviceId}
                />


                <ToggleField
                  label="Trusted Device"
                  description="Mark this device as trusted"
                  value={trustedDevice}
                  onChange={() =>
                    setTrustedDevice(!trustedDevice)
                  }
                />

              </View>

            </View>


            {/* ====================================== */}
            {/* ACTIONS */}
            {/* ====================================== */}

            <View style={styles.actions}>

              <Pressable
                style={styles.cancelButton}
                onPress={() => {
                  if (navigation.canGoBack()) {
                    navigation.goBack();
                    return;
                  }

                  navigation.navigate('UsersManagement');
                }}
              >

                <Text style={styles.cancelText}>
                  Cancel
                </Text>

              </Pressable>


              <Pressable
                style={[
                  styles.createButton,
                  !passportPhoto &&
                    styles.createButtonDisabled,
                ]}
                onPress={handleCreateUser}
              >

                <Ionicons
                  name="person-add-outline"
                  size={17}
                  color="#FFFFFF"
                />

                <Text style={styles.createText}>
                  Create User
                </Text>

              </Pressable>

            </View>

          </View>

        </ScrollView>

      </View>

    </View>

    <DropdownOverlay
      dropdown={activeDropdown}
      visible={Boolean(openDropdown && activeDropdown)}
      onClose={closeDropdown}
    />
    </>
  );
}


/* ================================================== */
/* INPUT FIELD */
/* ================================================== */

function InputField({
  label,
  placeholder,
  required = false,
  value,
  onChangeText,
  error,
}) {

  return (
    <View style={styles.field}>

      <Text style={styles.label}>

        {label}

        {required && (
          <Text style={styles.required}>
            {' '}*
          </Text>
        )}

      </Text>


      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9A9A9A"
        style={[
          styles.input,
          error && styles.inputError,
        ]}
        autoCapitalize="none"
      />


      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}

    </View>
  );
}


/* ================================================== */
/* DROPDOWN FIELD */
/* ================================================== */

function DropdownField({
  label,
  placeholder,
  required = false,
  value,
  options,
  openDropdown,
  dropdownName,
  onPress,
  onSelect,
  error,
}) {

  const selectorRef = useRef(null);

  const isOpen =
    openDropdown === dropdownName;

  const handleSelectorPress = () => {

    if (isOpen) {
      onPress(dropdownName);
      return;
    }

    selectorRef.current?.measureInWindow((x, y, width, height) => {
      onPress(dropdownName, {
        layout: { x, y, width, height },
        options,
        onSelect,
      });
    });
  };

  return (
    <View
      style={[
        styles.field,
      ]}
    >

      <Text style={styles.label}>

        {label}

        {required && (
          <Text style={styles.required}>
            {' '}*
          </Text>
        )}

      </Text>


      <Pressable
        ref={selectorRef}
        style={[
          styles.dropdownSelector,
          error && styles.inputError,
        ]}
        onPress={handleSelectorPress}
      >

        <Text
          style={[
            styles.dropdownText,
            !value && styles.dropdownPlaceholder,
          ]}
        >
          {value || placeholder}
        </Text>


        <Ionicons
          name={
            isOpen
              ? 'chevron-up-outline'
              : 'chevron-down-outline'
          }
          size={16}
          color="#666666"
        />

      </Pressable>

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}

    </View>
  );
}


/* ================================================== */
/* DROPDOWN OVERLAY */
/* ================================================== */

function DropdownOverlay({
  dropdown,
  visible,
  onClose,
}) {

  if (!dropdown) {
    return null;
  }

  const { layout, options, onSelect } = dropdown;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.dropdownOverlay}>

        <Pressable
          style={styles.dropdownOverlayBackdrop}
          onPress={onClose}
        />

        <View
          style={[
            styles.dropdownMenu,
            styles.dropdownOverlayMenu,
            {
              left: layout.x,
              top: layout.y + layout.height,
              width: layout.width,
            },
          ]}
        >

          {options.map((option) => (

            <Pressable
              key={option}
              style={styles.dropdownOption}
              onPress={() => onSelect(option)}
            >

              <Text style={styles.dropdownOptionText}>
                {option}
              </Text>

            </Pressable>

          ))}

        </View>

      </View>
    </Modal>
  );
}


/* ================================================== */
/* TOGGLE FIELD */
/* ================================================== */

function ToggleField({
  label,
  description,
  value,
  onChange,
}) {

  return (
    <View style={styles.toggleField}>

      <View style={styles.toggleTextContainer}>

        <Text style={styles.label}>
          {label}
        </Text>

        <Text style={styles.toggleDescription}>
          {description}
        </Text>

      </View>


      <Pressable
        onPress={onChange}
        style={[
          styles.toggle,
          value && styles.toggleActive,
        ]}
      >

        <View
          style={[
            styles.toggleCircle,
            value && styles.toggleCircleActive,
          ]}
        />

      </Pressable>

    </View>
  );
}


/* ================================================== */
/* STYLES */
/* ================================================== */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
  },

  content: {
    flex: 1,
    padding: 30,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  pageTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.3,
  },

  subtitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  formCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 24,
  },

  successMessage: {
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#D5D9CE',
    borderRadius: 8,
    backgroundColor: '#F3F5EF',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
    gap: 9,
  },

  successText: {
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    color: '#4B5320',
  },

  /* ---------------------------------------------- */
  /* SECTION STACKING */
  /* ---------------------------------------------- */

  section: {
    marginBottom: 30,
    position: 'relative',
  },

  personalSection: {
    zIndex: 400,
    elevation: 4,
  },

  organizationSection: {
    zIndex: 300,
    elevation: 3,
  },

  accountSection: {
    zIndex: 200,
    elevation: 2,
  },

  deviceSection: {
    zIndex: 100,
    elevation: 1,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#EEF1E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000000',
    letterSpacing: 0.5,
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 10,
    color: '#888888',
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginTop: 18,
    marginBottom: 20,
  },

  /* ---------------------------------------------- */
  /* PERSONAL INFORMATION */
  /* ---------------------------------------------- */

  personalInformationBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
  },

  personalFields: {
    flex: 1,
  },

  passportContainer: {
    width: 150,
  },

  passportBox: {
    width: 150,
    height: 190,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  passportBoxError: {
    borderColor: '#B42318',
  },

  passportImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  uploadPhotoText: {
    marginTop: 8,
    fontSize: 10,
    fontWeight: '700',
    color: '#555555',
  },

  /* ---------------------------------------------- */
  /* FORM */
  /* ---------------------------------------------- */

  formRow: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 18,
    position: 'relative',
    zIndex: 1,
  },

  field: {
    flex: 1,
    minWidth: 0,
    position: 'relative',
    zIndex: 10,
  },

  label: {
    fontSize: 11,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 8,
  },

  required: {
    color: '#B42318',
  },

  input: {
    width: '100%',
    height: 46,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 13,
    fontSize: 11,
    fontWeight: '500',
    color: '#111111',
  },

  inputError: {
    borderColor: '#B42318',
  },

  errorText: {
    marginTop: 5,
    fontSize: 9,
    fontWeight: '500',
    color: '#B42318',
  },

  /* ---------------------------------------------- */
  /* USER ID */
  /* ---------------------------------------------- */

  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },

  autoBadge: {
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  autoBadgeText: {
    fontSize: 7,
    fontWeight: '800',
    color: '#777777',
    letterSpacing: 0.5,
  },

  disabledInput: {
    height: 46,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 8,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  generatedText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#999999',
  },

  /* ---------------------------------------------- */
  /* PASSWORD */
  /* ---------------------------------------------- */

  passwordContainer: {
    width: '100%',
    height: 46,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  passwordInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 13,
    fontSize: 11,
    fontWeight: '500',
    color: '#111111',
  },

  eyeButton: {
    width: 42,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ---------------------------------------------- */
  /* DROPDOWNS */
  /* ---------------------------------------------- */

  dropdownSelector: {
    width: '100%',
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropdownText: {
    flex: 1,
    fontSize: 11,
    fontWeight: '500',
    color: '#222222',
    marginRight: 10,
  },

  dropdownPlaceholder: {
    color: '#9A9A9A',
  },

  dropdownMenu: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    overflow: 'hidden',
  },

  dropdownOverlay: {
    flex: 1,
  },

  dropdownOverlayBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },

  dropdownOverlayMenu: {
    position: 'absolute',
    elevation: 30,
  },

  dropdownOption: {
    minHeight: 40,
    paddingHorizontal: 13,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    backgroundColor: '#FFFFFF',
  },

  dropdownOptionText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#222222',
  },

  /* ---------------------------------------------- */
  /* ACCOUNT STATUS */
  /* ---------------------------------------------- */

  statusSelector: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },

  selectorText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#222222',
  },

  /* ---------------------------------------------- */
  /* TOGGLE */
  /* ---------------------------------------------- */

  toggleField: {
    flex: 1,
    minHeight: 46,
    borderWidth: 1,
    borderColor: '#D9DDE3',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 13,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  toggleTextContainer: {
    flex: 1,
    marginRight: 15,
  },

  toggleDescription: {
    fontSize: 9,
    color: '#888888',
    marginTop: -4,
  },

  toggle: {
    width: 38,
    height: 21,
    borderRadius: 12,
    backgroundColor: '#D5D5D5',
    padding: 2,
    justifyContent: 'center',
  },

  toggleActive: {
    backgroundColor: '#4B5320',
  },

  toggleCircle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
  },

  toggleCircleActive: {
    alignSelf: 'flex-end',
  },

  /* ---------------------------------------------- */
  /* ACTIONS */
  /* ---------------------------------------------- */

  actions: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 20,
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
  },

  cancelButton: {
    height: 43,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#333333',
  },

  createButton: {
    height: 43,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#4B5320',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  createButtonDisabled: {
    backgroundColor: '#A5A5A5',
  },

  createText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
  },

});
